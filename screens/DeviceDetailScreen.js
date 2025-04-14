import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Circle } from 'react-native-svg';

const screenWidth = Dimensions.get('window').width;

// Utility to simulate 1 week's worth of data (60 * 24 * 7 = 10080 points)
const generateStaticSensorData = () => {
  return Array.from({ length: 60 * 60 * 24 * 7 }, () =>
    +(Math.random() * 15 + 20).toFixed(0)
  );
};

// Downsampling by averaging in chunks
const downsampleData = (data, chunkSize) => {
  const result = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    const avg =
      chunk.reduce((sum, value) => sum + value, 0) / chunk.length;
    result.push(+avg.toFixed(0));
  }
  return result;
};

export default function DeviceDetailScreen() {
  const [range, setRange] = useState('minute');
  const [allSensorData, setAllSensorData] = useState(generateStaticSensorData());
  const intervalRef = useRef();

  // Add a new data point every minute
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const newVal = +(Math.random() * 15 + 20).toFixed(0);


      setAllSensorData(prev => {
        const updated = [...prev.slice(1), newVal];
        return updated;
      });


    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const getDisplayedData = () => {
    switch (range) {
      case 'minute':
        return allSensorData.slice(-60); // last 60 second
      case 'hour':
        return downsampleData(allSensorData.slice(-60 * 60), 60); // one data per minute...
      case 'day':
        return downsampleData(allSensorData.slice(-60 * 60 * 24), 60 * 60); // one data per  hours...
      case 'week':
        return downsampleData(allSensorData, 60 * 60 * 24); //one data per day....
      default:
        return [];
    }
  };

  const chartData = {
    labels: [],
    datasets: [
      {
        data: getDisplayedData(),
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Live Temperature Sensor</Text>

      <View style={styles.graphContainer}>
        <LineChart
          data={chartData}
          width={screenWidth}
          height={400}
          yAxisSuffix="°C" //used for providing the suffix to the Y axis labels 
          withVerticalLabels={true} //used for providing the vertical labels on the graph
          withVerticalLines={true} //Vertical lines go down from each X-axis point
          withHorizontalLines={true} //Used for providing the horizontal lines on the graph
          withHorizontalLabels={true}  //Used for providing the horizontal labels on the graph
          withDots={true}
          chartConfig={{
            color: (opacity = 1) => `rgba(255, 255 , 255, ${opacity})`, //used for providing color to the lines in the graph
            labelColor: (opacity = 1) => `rgba(255, 255 , 255, ${opacity})`, //used for providing color to the labels on the X and Y axis
            fillShadowGradient: '#3498db',
            fillShadowGradientOpacity: 0.4,
            propsForDots: { //used for providing the properties of the dots ball on the graph to point the data points
              r: '0',
              strokeWidth: '0',
              stroke: '#3498db',
            },
            propsForBackgroundLines: { //used for providing the properties of the background lines on the graph
              stroke: '#bff9c5',
              strokeDasharray: '2',
              strokeWidth: 0.1,
            },
          }}
          bezier // used for providing the curve to the graph
          style={styles.chart}
        />
      </View>


      <View style={styles.toggleContainer}>
        {['minute', 'hour', 'day', 'week'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.toggleButton, range === item && styles.activeToggle]}
            onPress={() => setRange(item)}
          >
            <Text style={styles.toggleText}>{item.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    // padding: 10,
    color: '#fff',
  },
  heading: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  toggleButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#333',
  },
  activeToggle: {
    backgroundColor: '#ffa726',
  },
  toggleText: {
    color: '#fff',
    fontWeight: '600',
  },
  graphContainer: {
    // borderRadius: 12,
    // borderWidth: 3,
    // borderColor: '#3498db',
    // backgroundColor:'#ffffff'
    color: '#fff',

  },
  chart: {
    // marginLeft: 0,
    // paddingLeft: 0,
    // marginRight: 0,
    // paddingRight: 0,
  },
});

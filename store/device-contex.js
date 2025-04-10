import { createContext } from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const deviceContext = createContext({
    devices :[] ,
    code : "" ,
    addDevice : (device) => {},
    updateCode : (newCode) => {},
}) ;

function DeviceContextProvider({ children }) {
    const [devices , setDevices] = useState([]) ;
    const [code , setCode] = useState([]) ;

    function addDevice(device) {
        setDevices((prevDevices) => [...prevDevices, device]) ;
    }

    function updateCode(newCode){
        setCode(newCode) ;
    }

    const value = {
        devices,
        code,
        addDevice,
        updateCode ,
    } ;

    return (
        <deviceContext.Provider value={value}>
            {children}
        </deviceContext.Provider>
    )
} ;


export default DeviceContextProvider ;
import IconDeviceTemperatureSensor from '../../icon-device-temperature-sensor';
import { SmartTemperatureSensor } from '../../interfaces/device.interface';
import BoxConnectionState from '../box-connection-state';
import BoxDeviceContent from '../box-device--content';
import BoxDevice from '../box-device--layout';
import BoxIcon from '../box-icon';

const BoxDeviceTemperatureSensor = ({ type, id, name, connectionState, temperature }: SmartTemperatureSensor) => {
    return (
        <BoxDevice>
            <BoxIcon>
                <IconDeviceTemperatureSensor />
            </BoxIcon>
            <BoxDeviceContent {...{ name, type }} />
            <BoxConnectionState connectionState={connectionState} />
        </BoxDevice>
    )
}

export default BoxDeviceTemperatureSensor;
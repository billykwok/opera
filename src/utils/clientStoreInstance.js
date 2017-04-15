// import mapDeviceWidthToSize from './mapDeviceWidthToSize';
import configStore from '../redux/configStore';

export default configStore({
  ...window.initialState,
  deviceSpec: {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight
  }
});

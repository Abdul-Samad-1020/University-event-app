import {Cloudinary} from '@cloudinary/url-gen';


export const cld = new Cloudinary({
    cloud: {
        cloudName: 'do1xdp0qo',
        apiKey: process.env.EXPO_PUBLIC_CLOUD_API
      },
      url:{
        secure: true,
      }
});
export const options ={
    upload_preset:'event-management-app',
    tag:'sample',
    unsigned:true,
}
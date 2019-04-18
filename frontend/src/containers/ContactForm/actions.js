import { 
  SEND_CONTACT 
} from './constants';
 
const sendContactForm = (contactInfo) => ({
  type: SEND_CONTACT,
  payload: contactInfo
});

export default sendContactForm;
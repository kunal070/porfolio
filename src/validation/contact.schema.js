// yup input validation
import * as Yup from "yup";

// contact form validation schema
export const contactValidationSchema = Yup.object({
    name: Yup.string().min(1).max(30).required(),
    email: Yup.string().email().required(),
    message: Yup.string().min(1).max(500).required()
})

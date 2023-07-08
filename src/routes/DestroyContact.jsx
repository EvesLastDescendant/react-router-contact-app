import { redirect } from "react-router-dom"
import { deleteContact } from "../contacts"

export async function action({params}) {
    // throw new Error("ooh shieza!")//you can comment this if you don't it. when you do, comment errorElement in main.jsx
    await deleteContact(params.contactId)
    return redirect("/")
}

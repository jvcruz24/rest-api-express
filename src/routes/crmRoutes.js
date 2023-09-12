import { addNewContact, getContacts, getContactwithID, updateContact, deleteContact } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            //middleWare
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getContacts)
        .post(addNewContact);
    app.route('/contact/:contactId')
        .get(getContactwithID)
        .put(updateContact)
        .delete(deleteContact);
}

export default routes;
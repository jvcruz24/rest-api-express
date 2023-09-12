import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req, res) => {
    try {
        let newContact = new Contact(req.body);
        await newContact.save();
        res.status(200).json(newContact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getContacts = async (req, res) => {
    try {
        const contact = await Contact.find({});
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getContactwithID = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.contactId);
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateContact = async (req, res) => {
    try {
        const { contactId } = req.params;
        const contact = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
        if (!contact) {
            return res.status(404).json({ message: `cannot find any contact with id ${contactId} ` })
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

export const deleteContact = async (req, res) => {
    try {
        const { contactId } = req.params;
        const contact = await Contact.findByIdAndDelete(contactId);
        if (!contact) {
            return res.status(404).json({ message: `cannot find any contact with id ${contactId} ` })
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
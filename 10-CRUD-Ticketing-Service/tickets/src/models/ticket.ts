import mongoose from 'mongoose';

// An interface that describes the properties
// required to create a new Ticket
interface TicketPropsInterface {
    email: string;
    password: string;
}

// An interface that describes the properties
// that a Ticket model has.
interface TicketModelInterface extends mongoose.Model<TicketDocInterface> {
    build(params: TicketPropsInterface): TicketDocInterface;
}

// An interface that describes the properties
// that a User Document has.
interface UserDocInterface extends mongoose.Document {
    email: string;
    password: string;
    createdAt?: string;
    updatedAt?: string;
}

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform(_, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.password;
                // delete ret.__v;
            },
        },
    },
);
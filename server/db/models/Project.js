import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: { type: String },
    description: { type: String },
    img: { data: Buffer, contentType: String },
    cloudinary_img : { type: String },
    demo_url: { type: String },
    github_url: { type: String }
});

mongoose.model('Project', ProjectSchema);

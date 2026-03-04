import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Path to our JSON file that acts as a simple database
const dataFilePath = path.join(__dirname, 'data.json');

// Helper function to read data
const readData = () => {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data file:', error);
        return { websiteInfo: {}, projects: [] }; // Fallback data
    }
};

// Helper function to write data
const writeData = (data) => {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
        return true;
    } catch (error) {
        console.error('Error writing data file:', error);
        return false;
    }
};

// --- API ENDPOINTS ---

// 1. GET Website Info
app.get('/api/website-info', (req, res) => {
    const data = readData();
    res.json(data.websiteInfo);
});

// 2. PUT Website Info
app.put('/api/website-info', (req, res) => {
    const data = readData();
    data.websiteInfo = { ...data.websiteInfo, ...req.body };

    if (writeData(data)) {
        res.json({ message: 'Website info updated successfully', websiteInfo: data.websiteInfo });
    } else {
        res.status(500).json({ error: 'Failed to update website info' });
    }
});

// 3. GET Projects
app.get('/api/projects', (req, res) => {
    const data = readData();
    res.json(data.projects);
});

// 4. POST (Create) a Project
app.post('/api/projects', (req, res) => {
    const data = readData();
    const newProject = {
        id: Date.now().toString(), // Mức độ đơn giản dùng timestamp làm ID
        ...req.body
    };

    data.projects.push(newProject);

    if (writeData(data)) {
        res.status(201).json({ message: 'Project created successfully', project: newProject });
    } else {
        res.status(500).json({ error: 'Failed to create project' });
    }
});

// 5. DELETE a Project
app.delete('/api/projects/:id', (req, res) => {
    const data = readData();
    const projectId = req.params.id;

    const initialLength = data.projects.length;
    data.projects = data.projects.filter(p => p.id !== projectId);

    if (data.projects.length === initialLength) {
        return res.status(404).json({ error: 'Project not found' });
    }

    if (writeData(data)) {
        res.json({ message: 'Project deleted successfully' });
    } else {
        res.status(500).json({ error: 'Failed to delete project' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend Server is running on http://localhost:${PORT}`);
});

import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript HTML5 APIs</h1>
    <div class="uploader">
        <h2>Drag Elements 🎉</h2>
        <div id="item-0" class="dragme" draggable="true"></div>
        <div id="dropzoneElements" class="dropzone">🎯 Drag Here!</div>
        <h2>Upload your files 🎉</h2> 
        <p>Accepts only .png, .jpg, .svg</p>
        <input type="file" class="files" accept="image/*" multiple>
        <div id="dropzoneFiles" class="dropzone">📂 Drag to Upload!</div>
        <div class="list"></div>
    </div>
    <style>
        .uploader {
            box-sizing: border-box;
            max-width: 90%;
            border-radius: 10px;
            border-bottom: 3px solid #d2d5da;
            margin: 25px auto;
            padding: 25px;
            background: #fff;
        }
        .dragme {
            background: #ce1f99;
            border-radius: 5px;
            width: 50px;
            height: 50px;
        }
        .dropzone {
            border-radius: 5px;
            margin-top: 25px;
            padding: 25px;
            border: 2px dashed #d2d5da;
            background: #f1f2f5;
        }
        .active {
            background: #ebfff6;
            border-color: #24b373;
        }
        #dropzoneElements {
            margin-bottom: 45px;
        }
        #dropzoneFiles {
            margin-bottom: 10px;
        }
    </style>
`;

const initForDropzoneElements = () => {
    const dragme = document.querySelector('.dragme');
    const dropzoneElements = document.querySelector('#dropzoneElements');

    dragme.addEventListener('dragstart', (e) => e.dataTransfer.setData('text/plain', e.target.id));

    dropzoneElements.addEventListener('dragenter', (e) => e.target.classList.add('active'));
    dropzoneElements.addEventListener('dragleave', (e) => e.target.classList.remove('active'));
    dropzoneElements.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'copy';
    });
    dropzoneElements.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.target.classList.remove('active');
        const id = e.dataTransfer.getData('text/plain');
        const element = document.getElementById(id);
        dropzoneElements.append(element);
    });
}

const initForDropzoneFiles = () => {
    const dropzoneFiles = document.querySelector('#dropzoneFiles');
    const files = document.querySelector('.files');
    const list = document.querySelector('.list');

    dropzoneFiles.addEventListener('dragenter', (e) => e.target.classList.add('active'));
    dropzoneFiles.addEventListener('dragleave', (e) => e.target.classList.remove('active'));
    dropzoneFiles.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'copy';
    });
    dropzoneFiles.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.target.classList.remove('active');
        const {files} = e.dataTransfer;
        handleFileUpload(files);
    });

    files.addEventListener('change', (e) => {
        const {files} = e.target;
        handleFileUpload(files);
    });

    const isAllowedType = (file) => ['image/png', 'image/jpeg', 'image/svg+xml'].includes(file.type)

    const showFilePreview = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load', (e) => {
            const div = document.createElement('div');
            div.innerHTML = `
                <div style="display: flex; margin-bottom: 5px;">
                    <img
                        src="${e.target.result}"
                        alt="${file.name}"
                        style="width: 50px; height: 50px; margin-right: 10px;">
                    <p>${file.name} | <span>${file.size} bytes</span></p>
                </div>
            `;
            list.append(div);
        })
    }

    const uploadFiles = async (files) => {
        const form = new FormData();
        [...files].forEach(file => form.append(file.name, file));
        console.log([...form.entries()]);
        const request = await fetch('//dragdropfiles.glitch.me/upload', {
            method: 'POST',
            body: form
        });
        return await request.json();
    }

    const handleFileUpload = async (files) => {
        const filesToUpload = [...files].filter(isAllowedType);
        filesToUpload.forEach(showFilePreview);
        const uploaded = await uploadFiles(filesToUpload);
        if (uploaded) {
            for(const image of uploaded.images) {
                console.log(image);
            }
        }
    }

    document.addEventListener('dragover', (e) => e.preventDefault());
    document.addEventListener('drop', (e) => e.preventDefault());
}

if ('draggable' in document.createElement('div')) {
    initForDropzoneElements();
}

initForDropzoneFiles();
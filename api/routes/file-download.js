const express = require("express");
const router = express.Router();
const fs = require("fs");
const baseUrl = "http://localhost:3000/resources/static/files/";

const getListFiles = (req, res) => {
    const directoryPath = __basedir + "/resources/static/files/";

    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            res.status(500).send({
                message: "Unable to scan files!",
            });
        }

        let fileInfos = [];

        files.forEach((file) => {
            fileInfos.push({
                name: file,
                url: baseUrl + file,
            });
        });

        res.status(200).send(fileInfos);
    });
};

const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/resources/static/files/";

    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
};

router.get('/files/:name', download);
router.get('/files', getListFiles);

module.exports = router;



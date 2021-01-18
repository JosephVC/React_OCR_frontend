import React, {Fragment} from 'react';
import Gridlist from 'react-gridlist';

const files = Array.from({length:50}, (_, i) => {
    let width = 300
    let height = Math.floor(Math.random() * 300) + 200;
    return {
      // the below line is for production; change back to 127.0.0.1:8000 for dev
      url: `https://django-ocr-backend.herokuapp.com//${width}/${height}.pdf`,
      width,
      height,
    }
})

let styles = {
    container: {
      margin: "20px auto",
      padding: "0 20px"
    },
    file: {
      position: "relative",
      width: "100%",
      height: "auto",
      verticalAlign: "top",
      background: "hsl(0, 0%, 98%)"
    }
}
  
const getGridGap = (elementWidth, windowHeight) => (elementWidth > 720 && windowHeight > 480) ? 10 : 5;

const getColumnCount = (elementWidth) => Math.floor(elementWidth / 300);

const getWindowMargin = (windowHeight) => Math.round(windowHeight * 1.5);

const getItemData = (file, columnWidth) => {
let fileRatio = file.height / file.width
let adjustedHeight = Math.round(columnWidth * fileRatio)
return {
    key: file.url,
    height: adjustedHeight,
}
}
  
const FileGrid = () => {
    return (
    <div>
        <Gridlist
        items={files}
        getGridGap={getGridGap}
        getColumnCount={getColumnCount}
        getWindowMargin={getWindowMargin}
        getItemData={getItemData}
        renderItem={(file) => {
            return (
            <img
                src={file.url}
                width={file.width}
                height={file.height}
            />
            )
        }}
        />
    </div>
    )
}

export default FileGrid;
  
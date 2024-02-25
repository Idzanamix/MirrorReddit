export const indexTemplate = (content) =>
    `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">                                  
                    <title>Reddit Idzanamix</title>
                    <base href="/">
                    <link href="static/style.css" rel="stylesheet" />
                    <link rel="icon" href="https://www.redditstatic.com/accountmanager/favicon/safari-pinned-tab.svg" type="image/x-icon">
                    <script src="static/client.js" type="application/javascript"></script>        
                </head>
                <body>
                    <div id="react_root">${content}</div>
                    <div id="modal_root"></div>
                </body>
            </html>
            `;


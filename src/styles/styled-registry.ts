'use client';

import React from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet } from "styled-components";


// export default function StyleComponentsRegistry({children}: {children: React.ReactNode}){
//     const [sheet] = React.useState(() => new ServerStyleSheet());

//     useServerInsertedHTML(() => {
//         const styles = sheet.getStyleElement();
//         sheet.instance.clearTag();
        
//         return {styles};
//     });

//     // return <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>;
// }

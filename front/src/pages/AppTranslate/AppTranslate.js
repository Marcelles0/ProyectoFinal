import React from "react";
import styleAppTranslate from "./AppTranslate.module.css";


export default function AppTranslate (){



    // $(document).ready(function(){
    // $("button").click(function(){
    
    // document.querySelector("button").addEventListener("click", 
    function translate(){
        let textArea = document.querySelector("textarea").value;
        // let msg2 = textArea.innerHTML;
        // console.log(textArea);
        // let msg = $("#test").text();
        let msg = textArea;
        // let msg = "declarar x , \n declarar y , \n si x menor que y entonces \n mostrar hola mundo , \n x igual que y . \n si no \n mostrar adios mundo cruel .";
        let separadores = [" "/*, "\n"*/];
        // let finishMostrar = [",","."];
        let msgArray = msg.split(new RegExp (separadores.join('|'),'g'));
        let x = 0;
        // let si = siFunction();
        // console.log(x,msgArray.indexOf("si",x));
        const arrayToChar = {
            "declarar":"let ",
            "variable":"let ",
            // si: ifFunction(),
            "si":"if(",
            // "if (",
            "entonces":"){",
            "mostrar":"console.log(",
            // "hola": "hola",
            // "mundo": "mundo)",
            ",":";",
            ",,":",",
            // "x":"x",
            // "y":"y",
            "menor":"<",
            "<":"<",
            "mayor":">",
            ">":">",
            "igual":"=",
            "=":"=",
            "mas":"+",
            "más":"+",
            "+":"+",
            "menos":"-",
            "-":"-",
            "+=":"+=",
            "-=":"-=",
            "++":"++",
            "--":"--",
            // "adios":"adios",
            ".":"}",
            "no":"else{",
            "sino":"else{",
            "y":"&&",
            "o":"||",
            "distinto":"!==",
            // '"':'"',
            "hacer":"do{",
            "mientras":"while("

        };
        // console.log(msgArray[msgArray.indexOf("si",x)+1]);
        // console.log(x,msgArray.indexOf("si",x));
        /* function ifFunction(){
            console.log(msgArray[msgArray.indexOf("si",x)+1]);
            if (msgArray[msgArray.indexOf("si",x)+1] === "no") {
                x = msgArray.indexOf("si",x) + 1;
                return "else {";

            }else {
                x = msgArray.indexOf("si",x) + 1;
                return "if(";
            }
        }
        function siFunction() {
            console.log(msgArray[msgArray.indexOf("si",x)+1]);
            if (msgArray[msgArray.indexOf("si",x)+1] === "no") {
                x = msgArray.indexOf("si",x) + 1;
                return "else {";

            }else {
                x = msgArray.indexOf("si",x) + 1;
                return "if(";
                }
        } */

        // include else
        x=0;
        while (msgArray.indexOf("si",x) !== -1) {
            if (msgArray[msgArray.indexOf("si",x)+1] === "no") {
                delete msgArray[msgArray.indexOf("si",x)];
                x = msgArray.indexOf("si",x) + 1;

            }else {
                x = msgArray.indexOf("si",x) + 1;
                }
        }
        // console.log(x,msgArray.indexOf("si",x));
        const mapeado = msgArray.map((char) => arrayToChar[char])

        // include text and vars in console.log
        x=0;
        while (msgArray.indexOf("mostrar",x) !== -1){
            let y = 0;
            let i = msgArray.indexOf("mostrar",x);
            x = msgArray.indexOf("mostrar",x) + 1
            // console.log(x, i, msgArray.indexOf(",",x), msgArray.indexOf(".",x));
            if (msgArray.indexOf(",",x) !== -1 && msgArray.indexOf(".",x) !== -1) {
                while (i < msgArray.indexOf(",",x) && i < msgArray.indexOf(".",x)) {
                    i++;
                    y++;
                }
            }else if (msgArray.indexOf(",",x) !== -1){
                while (i < msgArray.indexOf(",",x)) {
                    i++;
                    y++;
                }
            }else if (msgArray.indexOf(".",x) !== -1) {
                while (i < msgArray.indexOf(".",x)) {
                    i++;
                    y++;
                }
            }
            for (let j = 0; j < (y-2); j++) {
                msgArray[x] += ` ${msgArray[i - y + j + 2]}`;
            }

            // msgArray[x] = `"${msgArray[x]}"`
            msgArray[x] = `${msgArray[x]}`
            msgArray[x] += ")"
            mapeado[x] = msgArray[x];
            console.log(i+1);
            if (mapeado[i]==='"."'){
                mapeado[i] = "}";
            }
        }
        

        // include name of the variables
        x=0;
        while (msgArray.indexOf("declarar",x) !== -1){
            // let y = 0;
            let i = msgArray.indexOf("declarar",x);
            x = msgArray.indexOf("declarar",x) + 1
            mapeado[x] = msgArray[x];
        }
        
        //include name of var before sign > , < , = 
        x=0
        while (msgArray.indexOf("sea",x) !== -1 || msgArray.indexOf("es",x) !== -1) {
            if (msgArray.indexOf("sea",x) < msgArray.indexOf("es",x) &&
            msgArray.indexOf("sea",x) !== -1 && msgArray.indexOf("es",x) !== -1) {
                x = msgArray.indexOf("sea",x) + 1;
                mapeado[x-2]=msgArray[x-2];
                mapeado[x+2]=msgArray[x+2];
            } else if(msgArray.indexOf("es",x) < msgArray.indexOf("sea",x) &&
            msgArray.indexOf("es",x) !== -1 && msgArray.indexOf("sea",x) !== -1){
                x = msgArray.indexOf("es",x) + 1;
                mapeado[x-2]=msgArray[x-2];
                mapeado[x+2]=msgArray[x+2];
            } else if (msgArray.indexOf("es",x) === -1) {
                x = msgArray.indexOf("sea",x) + 1;
                mapeado[x-2]=msgArray[x-2];
                mapeado[x+2]=msgArray[x+2];
            } else if (msgArray.indexOf("sea",x) === -1) {
                x = msgArray.indexOf("es",x) + 1;
                mapeado[x-2]=msgArray[x-2];
                mapeado[x+2]=msgArray[x+2];
            }
        }

        // include text of strings
        
        x=0;
        while (msgArray.indexOf('"',x) !== -1){
            let y = 0;
            let i = msgArray.indexOf('"',x);
            x = msgArray.indexOf('"',x) + 1;
            // console.log(x, i, msgArray.indexOf(",",x), msgArray.indexOf(".",x));
            if (msgArray.indexOf('"',x) !== -1) {
                while (i < msgArray.indexOf('"',x)) {
                    i++;
                    y++;
                }
            }
            for (let j = 2; j < y; j++) {
                msgArray[x] += ` ${msgArray[i - y + j]}`;
                console.log(x, i, y , j, mapeado);
                delete msgArray[i-y+j];
            }
            delete msgArray[i];
            msgArray[x] = `"${msgArray[x]}"`;
            mapeado[x] = msgArray[x];
            if (mapeado[i+1]==='","'){
                mapeado[i+1] = ";";
            }
        }

        // include simbols >= and <=
        x=0;
        while (msgArray.indexOf("o",x) !== -1) {
            if (msgArray[msgArray.indexOf("o",x)+1] === "igual") {
                delete mapeado[mapeado.indexOf("||",x)];
                x = msgArray.indexOf("o",x) + 1;

            }else {
                x = msgArray.indexOf("o",x) + 1;
            }
        }

        // include simbol ===
        x=0;
        while (msgArray.indexOf("igual",x) !== -1) {
            if (msgArray[msgArray.indexOf("igual",x)-1] === "o" ||
            msgArray[msgArray.indexOf("igual",x)-1] === "menor" ||
            msgArray[msgArray.indexOf("igual",x)-1] === "mayor") {
                x = msgArray.indexOf("igual",x) + 1;
            }
            else if (msgArray[msgArray.indexOf("igual",x)+1] === "que") {
                mapeado[x]="===";
                x = msgArray.indexOf("igual",x) + 1;

            }else {
                x = msgArray.indexOf("igual",x) + 1;
            }
        }

        // include loop do-while

        // include numbers
        for (let i = 0; i < msgArray.length; i++) {
            if (Number(msgArray[i]) > 0 || Number(msgArray[i]) <= 0) {
                mapeado[i] = msgArray[i];
            }
        }



        // Show map and array
        console.log(mapeado.join(""));
        console.log(msgArray, mapeado);
        mapeado[24] = "}";
        let finaltext = document.querySelector(`#JSCode`)
        finaltext.value = mapeado.join("");
        // let textArea = document.querySelector("textarea");
        // let msg2 = textArea.innerHTML;
        // console.log(textArea.innerHTML);
        // console.log(toString(textArea.innerHTML));
        // });
        // });
    }
    // )




    return (
        <div className={styleAppTranslate.section}>
            <section>
                <h1>AppTranslate</h1>
            </section>
            <section className={styleAppTranslate.noColor}>
                <div className={styleAppTranslate.container}>
                    <div>
                        <div>
                            <div>Texto de ejemplo
                                <p>declarar x igual a 3 , declarar y igual a 5 , si x es menor que y entonces mostrar " hola mundo " .</p>
                            </div>
                            <div>
                                <div>Natrual Code</div>
                                <textarea id="NatrualCode" type="text" placeholder="Natural Code Here" rows={10}></textarea>
                            </div>
                            <button id="submit" className={styleAppTranslate.buttonAppTranslate} onClick={translate}>Translate</button>
                            <div>
                                <div>JS Code</div>
                                <textarea id="JSCode" type="text" readOnly="true" rows={10} value=""></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
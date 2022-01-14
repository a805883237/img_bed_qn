/**
 * 复制文本到剪贴板
 * @param {string} content 
 */
export function copyText(content){
  let aux = document.createElement("input"); 
  aux.setAttribute("value", content); 
  document.body.appendChild(aux); 
  aux.select();
  document.execCommand("copy"); 
  document.body.removeChild(aux);
}
function displayCitations() {
    if (!document.querySelector || !document.createElement || !document.createTextNode){
        return false ;
    }

    // 取得所有引用
    quotes = document.querySelector("blockquote")
    // 遍历引用
    for(var i=0; i<quotes.length;i++) {
        // 如果没有cite属性，继续循坏
        if (!quotes[i].getAttribute("cite")) {
            continue;
        }
        // 获取cite属性保存至url
        var url = quotes[i].getAttribute("cite");
        // 取得引用中的所有元素节点
        var quoteChildren = quotes[i].getElementByTagName("*");
        // 如果没有元素节点，就继续循环
        // parentNode.lastElementChild 尝试写
        if (quoteChildren < 1) continue;
        var elem = quoteChildren[quoteChildren.length-1];
        // 创建标记 
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("herf", url);
        var superscript = document.createElement('sup');
        superscript.appendChild(link);

        // 把标记添加到最后一个元素节点
        elem.appendChild(superscript);
    }
}
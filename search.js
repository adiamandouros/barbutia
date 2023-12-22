function searchAndHide(nodes, inputText){
    const originalStyle = window.getComputedStyle(nodes[0]).display;
    console.log(originalStyle);
    for(const node of nodes){
        node.setAttribute('style', 'display:none;');
        // console.log(node);
        var elements = node.getElementsByTagName('*');
        for(const element of elements){
            // console.log(element.textContent);
            if(element.textContent){
                if(element.textContent.toUpperCase().includes(inputText.toUpperCase())){
                    node.setAttribute('style', 'display:' + originalStyle + ';');
                    break
                }
            }
        }
    }
}
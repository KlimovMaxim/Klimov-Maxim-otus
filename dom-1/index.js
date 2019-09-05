function getPath(element) {
    const isUnique = selector => {
        return document.querySelectorAll(selector).length === 1;
      };

    let css_selector = "";

    if (!node) return;

    if (element instanceof HTMLBodyElement) {
        return "body";
    }
    const getProps = elem => {
        const tag = elem.tagName.toLowerCase();
        let selector = tag;
        if (elem.id !== '') {
          selector = `${tag}#${elem.id}`;
        } else if (elem.className !== '') {
           selector = `${tag}.${elem.className.trim().split(/\s+/).join('.')}`;
        }
        return selector;
      };
    
    css_selector =  getProps(element);
    if (isUnique(css_selector)) return css_selector;
    
    const elements = [];
    if(element instanceof HTMLElement) {
      elements.push(element);
    }
  
    let parent = element.parentElement
    while (parent) {
      elements.push(parent);
      parent = parent.parentElement;
    }
  
    elements.reverse();
    return elements.map((elem) => {
      let index = Array.from(elem.parentNode.children).indexOf(elem) + 1;
      return `${getProps(elem)}:nth-child(${index})`;
    }).join(' > ');
  }


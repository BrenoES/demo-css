interface Button {
    render(): void,
    onClick(f: Function): any
}

abstract class Dialog {
    abstract createButton(): Button

    closeDialog(fn: any) {
        return fn()
    }
    
    render() {
        const button = this.createButton();
        button.onClick(console.log)
        button.render()
    }
}

class WindowDialog extends Dialog {
    createButton(): Button {
        return new WindowButton();
    }
}

class WindowButton implements Button {
    render(): void {
        console.log('window button')
    }
    onClick(f: Function): Function {
        return f('on window click')
    }
}



class WebDialog extends Dialog {
    createButton(): Button {
        return new WebButton();
    }
}

class WebButton implements Button {
    render(): void {
        console.log('web button')
    }
    onClick(f: Function): any {
        return f('on web click')
    }
}
interface IOptionsApp {
    type: string
}


class DialogFactory {
    constructor(private dialog: Dialog) {
        this.dialog.render()
    }
}

new DialogFactory(new WebDialog())
new DialogFactory(new WindowDialog())
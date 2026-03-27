class YourComponentName extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div>
        <!-- Example content -->
        <p>This is a simple component.</p>
        <p>You will put only html in this file </p>
        <section>
            <p>
                To use this component, 
                    add the following tag to your html file 
                    (after changing the name of the component):
                <your-component-name></your-component-name>
            </p>
            <p>
                To add styles, create a css file in the styles folder
                    and import it in the html file using a style tag.
                        For example:
                <style src="../styles/your-component-name.module.css" />
            </p>
            <p>
                My current recommendation is to style components
                    by adding a class to the element in the html file 
                    and then styling that class in the css file.
                        For example:
                <your-component-name class="my-component"></your-component-name>
            </p>
        </section>
    </div>
    `;
  }
}

customElements.define("your-component-name", YourComponentName);

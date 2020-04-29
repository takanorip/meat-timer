import { LitElement, html, css } from 'lit-element';

export class MeatTimer extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      }

      main {
        flex-grow: 1;
      }

      .logo > svg {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `
  }

  render() {
    return html`
      <main>
        <h1>My apsssssssssふぁｈｄｊｋはｆｌｈｄじゃｊｄｈｆｌｋｊｈsssp</h1>

        <p>Edit <code>src/MeatTimer.js</code> and save to reload.</p>
      </main>
    `
  }
}

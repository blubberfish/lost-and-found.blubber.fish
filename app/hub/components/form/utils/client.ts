export class FormClient extends EventTarget {
  static EVENT_CHANGE = "change";

  state: {
    disabled?: boolean;
    readonly?: boolean;
    value: Record<string, unknown>;
  } = {
    value: {},
  };

  get disabled() {
    return this.state.disabled;
  }

  set disabled(value: boolean | undefined) {
    this.state.disabled = value;
    this.dispatchEvent(
      new CustomEvent(FormClient.EVENT_CHANGE, { detail: this.state }),
    );
  }

  get readonly() {
    return this.state.readonly;
  }

  set readonly(value: boolean | undefined) {
    this.state.readonly = value;
    this.dispatchEvent(
      new CustomEvent(FormClient.EVENT_CHANGE, { detail: this.state }),
    );
  }
}

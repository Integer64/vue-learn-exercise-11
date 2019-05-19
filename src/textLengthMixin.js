export const textLengthMixin = {
    computed: {
        countChars() {
            return this.lengthText + ' (' + this.lengthText.length + ')';
        }
    }
};

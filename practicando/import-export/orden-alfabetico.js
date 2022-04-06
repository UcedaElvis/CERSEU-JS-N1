export function ordenAlfabetico (words) {

    words.sort((a,b) => {
        a.a.toLowerCase();
        b.a.toLowerCase();
        if(a = b) {
            return 0;
        }
        if (a < b) {
            return -1;
        }
        return 1;
    });

    return words;
}
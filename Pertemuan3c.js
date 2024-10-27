function satu(callback) {
    console.log("satu");
    callback();
}

function dua(callback) {
    console.log("dua");
    setTimeout(() => {
        callback();
    }, 2000);
}

function tiga() {
    console.log("tiga");
}

satu(() => {
    dua(() => {
        tiga();
    });
});

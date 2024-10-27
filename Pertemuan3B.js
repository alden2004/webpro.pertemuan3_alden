const satuedit = (callback) => {
    console.log(" Halo saya satu edit");
    callback();
}

const duaedit = (callback) => {
    setTimeout(() => {
    console.log(" Halo saya dua edit");
    callback();
    }, 5000);
};

const tigaedit = (callback) => {
    setTimeout(() => {
    console.log(" Halo saya tiga edit");
    callback();
    }, 2000);
};

const empatedit = () => {
    console.log(" Halo saya empat edit");
};

satuedit(() => {
    duaedit(() => {
        tigaedit(() => {
            empatedit();
        });
    });
});
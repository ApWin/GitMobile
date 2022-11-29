const CardWithSpaces = (x = 0) => {

    return x ? x.toString().match(/.{1,4}/g).join(" ") : 0;

};

export default CardWithSpaces;

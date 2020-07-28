window.onload = () => {
    const scriptJs = ['javascript30Code', 'testFun'];
    const curApplyJs = ['testFun'];
    const _body = document.body;
    curApplyJs.map((item) => {
        const script = document.createElement('script');
        script.src = `./js/${item}.js`;
        _body.appendChild(script);
    });
}
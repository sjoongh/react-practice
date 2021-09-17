class Welcome extends React.Component {
    // 생성자
    constructor(props) {
        super(props); // 부모 생성자 호출
        console.log("Welcome props:", props);
        console.log("Welcome 생성자 호출!");
    }

    render() {
        // JSX를 리턴
        console.log("render props:", this.props);
        // 여기서 브라우저에 출력
        return (
            <div>
                <h3>{ this.props.message }</h3>
                { this.props.children }
            </div>
        )
    }
}
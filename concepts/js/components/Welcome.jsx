class Welcome extends React.Component {
    // 생성자
    constructor(props) {
        super(props); // 부모 생성자 호출

        // state : 객체 내부에서 정의되고 사용되는 데이터
        // 내부에서 변경 가능
        this.state = {
            color: "yellow"
        }

        console.log("Welcome props:", props);
        console.log("Welcome state:", this.state);
        console.log("Welcome 생성자 호출!");
    }

    render() {
        // JSX를 리턴
        console.log("render props:", this.props);

        // 컴포넌트에 style 부여
        // style 속성에 객체 전달
        const style = {
            color: this.state.color,
            backgroundColor: "black"
        }
        // 여기서 브라우저에 출력
        return (
            <div>
                <h3 style={style}>{ this.props.message }</h3>
                { this.props.children }
            </div>
        )
    }
}
import React from "react";
import Input from '../../Components/Input';
import styled from 'styled-components';
import { Helmet } from "react-helmet";

const Container = styled.div`
padding-left: 1.5rem;
padding-right: 1.5rem;
`;

const Row = styled.div`
display: flex;
flex-wrap: wrap;
margin-right: -.75rem;
margin-left: -.75rem;
`;

const RowCenter = styled(Row)`
justify-content: center!important;
`;

const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #e3e6f0;
    border-radius: .35rem;
`;

const CardBody = styled.div`
flex: 1 1 auto;
min-height: 1px;
padding: 1.25rem;
`;

const Col = styled.div`
    position: relative;
    width: 100%;
    padding-right: .75rem;
    padding-left: .75rem;
`;

const Button = styled.button`
display: inline-block;
    font-weight: 400;
    color: #858796;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .35rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

const PrimaryBtn = styled(Button)`
color: #fff;
background-color: ${props => props.theme.primaryColor};
border-color: ${props => props.theme.primaryColor};
`;



export default ({
    userid,
    userpw,
    onSubmit
}) => {

    return (
        <Container>
            <Helmet>
            <title>Log In | Prismagram</title>
          </Helmet>
            <RowCenter>
                <Col className="col-md-9">
                    <Card className="my-5">
                        <CardBody>
                            <Row>
                                <Col className="p-5">
                                    <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">로그인</h1>
                                    </div>
                                    <form className="user" onSubmit={onSubmit}>
                                        <Input className="form-control form-control-user" placeholder={"Username"} required value={userid.value} onChange={userid.onChange} /><br />
                                        <Input className="form-control form-control-user" type="password"   placeholder={"Password"} required value={userpw.value} onChange={userpw.onChange} /><br />
                                        <PrimaryBtn className="btn-user btn-block">Log in</PrimaryBtn>
                                    </form>
                                    
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </RowCenter>
        </Container>
    )

}
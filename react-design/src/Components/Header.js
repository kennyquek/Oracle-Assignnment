import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";
import {SimpleAuthenticationDetailsProvider} from "oci-common/lib/auth/auth";

const common = require("oci-common");
const promise = require("es6-promise");
require("isomorphic-fetch");

//Credentials [NEVER do this in production mode]
const user="ocid1.user.oc1..aaaaaaaa7ocdaqhezovaozglejekyunhknb4j2nrmzhenw7vvpr2tbo7lnka";
const fingerprint="15:09:72:ce:54:8a:d0:d1:0e:d0:8a:d4:43:f3:27:6b";
const private_key="-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEowIBAAKCAQEArYxbefPPj0A3olJZoAuZqK+xkXrTj9XuR5AnvdXmYyr+mJ6o\n" +
    "Jf8ANmdFEBU8wgrTtYyMNeg/F/aGnEeFe39VDQvMsC5YTba3UVyuKlaqo4T3etRh\n" +
    "vutL0ZpSAFJljMl52aOK1qI1eoVOHCtouyAAYKuCmBBkIVu7hNRc1uVUlJ0MR5XH\n" +
    "vQilfJIGsKltMBWXrntRlsgOlK1DMtJU9EtXo9lLJZ03xTjJGtUvh6009x4OxYuv\n" +
    "h8xzgsUDSAYdyp2DbwuGeNcYoegBVvYvZazNYx/gPfyz7tA2DlCTuJYmD4myZS4W\n" +
    "/IA4fyMSG6oNjVJTLd2L3/akN0yYmxjoBKQJHwIDAQABAoIBAG/zbr8IjAf4gOrw\n" +
    "/GfFk+XBEGasOPU8J216jGhlJy0pevqwvf9ks5pkm6R4Tq1NlqwycfAEVU779HGz\n" +
    "oWO9C/xSdEPiYYwgJbkSdDdTmNfK2modvsANwOcBCYyzmlZrUXMXkGRMVvsmKvD4\n" +
    "/6JWTmgNuzyktjLeneRdqVXmsdz7MeSrftQqpuaIBfVkoYutp9yhCiwEyxHnqfB9\n" +
    "fUNHGDEwSDWNA2JjpM7NJINsPkhnMSK03LnziqmuiMlWnAzBAuOrl91WktUDevWm\n" +
    "UF6/9CtqcDWX49A/bou/fkJk0V2oOmX922ehoIXk/GzSKcqh2N2EJUW+OgbkWV3D\n" +
    "Vk+YdqECgYEA2q+/SFfYkulzET6ykKvQO2aJBi4Z51tSfcnxOvYczQ+A8ffax84T\n" +
    "vbIjmkYI14h5PggjskQbzsb7Iv4V8wNGZSEe89CtV19LXKKAqQx/XvRNIGfFf+CG\n" +
    "afy8jDd/fEX4Fc7198JE7Dc1a1Qt2x41XQ0cmET/JShHputrIHVcx4MCgYEAyyj3\n" +
    "ZNN16NuM8mir8ymESpwJ/aBZI+ndyaXGvNTPD/FgyxUqwUHf8dcVsiAXHhBpgtr4\n" +
    "CihXjVPxS1NdNIUJ8y98jMohqe/nnCXVYeNcWwLHPwykMV3J6deaaWWzBCsHEBAT\n" +
    "1EzssoYlGvXORNBE1WJKrxg+r37WPjCn0g3eaTUCgYAClFIYQ1j9mp1N1cR7alth\n" +
    "Z/szxHVvwib97tTWkjKSxJ0LvZWqB6c59JDw7+SIzkZH0gbBwoXlcXli10ZhAGfj\n" +
    "J3na/FofDrOv2wbTd59E+nKycCbnNDnBpEaBDOKHD7g2YaOLEZKIiropkuubiwas\n" +
    "G0x8C0xLHueBc4Nm9ZtriwKBgQC0Y1Cfbv9f3indR8F97FwxnzFjyQ+9SreKh67a\n" +
    "Fh8w6cNnLwlChcphwvfZrJK6OBpnfSQGaOGsdF9o4cF9k69NBdoSbJvNd13wkMtR\n" +
    "2n4ztVjTC9dymfNhtfW+JfX4+neP9KaWuCLnNSMXODCJe1/TFC56IA3w5681kyA/\n" +
    "696TDQKBgGQv+2pt73uCKzZszv2rZuhHcCr/940xEQDDyurmenlNHlMuhxfRmsZx\n" +
    "eprQsm194lT9krvmenv1S77Wcboqgk0F0BvrNIkFz2Jzl1ZeUf0K5m61i0WUk5hn\n" +
    "yo6cK+tXcdt1joTsCVeJgk71cijF4Yw09Jai8RrlEjYIk8H4rit8\n" +
    "-----END RSA PRIVATE KEY-----";

const tenancy="ocid1.tenancy.oc1..aaaaaaaaq6gxwwhbwpd7nhlwrregibyto722bbwpd44uoveo33kgggepx3qq";
const region="ap-sydney-1";
const pass_phrase="aaaaaa";
//[END]

const url = "https://b4cs5opbx6sbm5pxt7traztlbi.apigateway.ap-sydney-1.oci.customer-oci.com/v1/fibonacci";
const url_2 = "/v1/fibonacci";

class Header extends Component {

    constructor(props){
        super(props);

        this.state = {
            loading: false,
            updateInput:"",
            one: "",
            two: ""
        };

        this.onItemClick = this.onItemClick.bind(this);
        this.updateInput = this.updateInput.bind(this);

    }

    updateInput(event){
        this.setState({updateInput : event.target.value})
    }

    onItemClick() {

        let value = document.getElementById("input_value").value;
        let number = parseInt(value) || 0;

        if(number < 1 || number > 100){
            alert("Invalid value");
        }else{

            promise.polyfill();

            const provider = new SimpleAuthenticationDetailsProvider(tenancy, user, fingerprint, private_key, pass_phrase, region);

            const headers = new Headers();
            headers.append('Content-Type' , 'application/json');


            this.setState({loading : true});

            (async () => {
                // 1. Create Request Signing instance
                const signer = new common.DefaultRequestSigner(provider);

                // 2. Create HttpRequest to be signed
                const httpRequest = {
                    uri: url,
                    headers: headers,
                    method: "POST",
                    body: JSON.stringify({elements: parseInt(this.state.updateInput) || 0})
                };

                // 3. sign request
                signer.signHttpRequest(httpRequest);

                // const response = await fetch(url_2);

                // 4. Make the call
                await fetch(
                    new Request(url_2, {
                        method: httpRequest.method,
                        headers: httpRequest.headers,
                        body: httpRequest.body
                    })
                ).then(response =>
                    response.json().then(data => ({
                            data: data,
                            status: response.status
                        })
                    ).then(res => {

                        this.setState({loading : false});

                        const ansOne = res.data.fibonacci.toString();
                        const ansTwo = res.data.sorted.toString();

                        this.setState({one : ansOne});
                        this.setState({two : ansTwo});

                        console.log(res.data.sorted);
                        console.log(res.data.sorted);

                    }));


            })();
        }


    }


  render() {

    if(this.props.data) {

        var name = this.props.data.name;
        var description = this.props.data.description;
    }





    return (
      <header id="home">
      <ParticlesBg type="circle" bg={true} />
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
      </nav>

      <div className="row banner">

         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
                <input type="text" name="enter" className="enter" id="input_value" onChange={this.updateInput}/>
                <button onClick={this.onItemClick} id="input_button" disabled ={this.state.loading}>
                    {this.state.loading && <i className="fa fa-refresh fa-spin"/>}
                    Enter
                </button>

            </ul>

             <div className="answerOne" id="one">{this.state.one}</div>
             <div className="answerTwo" id = "two">{this.state.two}</div>

         </div>
      </div>

    </header>

    );
  }
}


export default Header;

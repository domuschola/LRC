import React, { Component } from 'react';
import { MDBContainer, MDBIframe } from "mdbreact";
import "../../style/Policy1.scss";

export class Policy1 extends Component {
    render() {
        return (
            <div className="policy1">
                {/* <iframe className="policy1-iframe"
                    title="policy1" 
                    src="https://docs.google.com/document/d/e/2PACX-1vQyR8feuqQcW_JdkUYYhtt9aoFgWVAHCOuK6b9L95uRC2_wu-vpHZg5wqDLWkhkiDmW3c2u_QWF_BPo/pub?embedded=true" 
                    frameborder="0" 
                    allowfullscreen 
                    // aria-hidden="false" 
                    // tabindex="0"
                >
                </iframe> */}

                {/* <ResponsiveEmbed className="policy1-iframe" bsPrefix>
                    <embed src="https://docs.google.com/document/d/e/2PACX-1vQyR8feuqQcW_JdkUYYhtt9aoFgWVAHCOuK6b9L95uRC2_wu-vpHZg5wqDLWkhkiDmW3c2u_QWF_BPo/pub?embedded=true" />
                </ResponsiveEmbed> */}
                
                <MDBContainer className="policy1-iframe">
                    {/* <MDBIframe allowFullScreen src="https://docs.google.com/document/d/e/2PACX-1vQyR8feuqQcW_JdkUYYhtt9aoFgWVAHCOuK6b9L95uRC2_wu-vpHZg5wqDLWkhkiDmW3c2u_QWF_BPo/pub?embedded=true" /> */}
                    <MDBIframe allowFullScreen src="https://docs.google.com/document/d/e/2PACX-1vRAGU6vHx9Pl0NN5zN88UE0YLNtFPwC2LPq6jBOXiT2JEwJ857knfNc0FGWZahsCuGkTaScEaU2UMhO/pub" />
                </MDBContainer>
            </div>
        )
    }
}

export default Policy1

import React, { Component } from "react";

class ClassComponent extends Component {
    state = {
        usuarios: ["Bruno", "Pedro", "Dudu"],
    };

    render() {
        const { usuarios } = this.state;

        return (
            <div className="class-components">
                {usuarios.map(item => (
                    <p>{item}</p>
                ))}
            </div>
        )
    }
}

export default ClassComponent;
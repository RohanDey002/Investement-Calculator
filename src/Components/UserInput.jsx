
export default function UserInput({ onchange, userinput }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        required
                        value={userinput.initialInvestment}
                        onChange={(event) => onchange('initialInvestment', event.target.value)}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        required
                        value={userinput.annualInvestment}
                        onChange={(event) => onchange('annualInvestment', event.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        required
                        value={userinput.expectedReturn}
                        onChange={(event) => onchange('expectedReturn', event.target.value)}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        required
                        value={userinput.duration}
                        onChange={(event) => onchange('duration', event.target.value)}
                    />
                </p>
            </div>
        </section>
    )
}
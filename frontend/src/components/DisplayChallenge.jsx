export default function DisplayChallenge({ question }) {
    // takes in a question object and displays it
    return (
        <>
            <div key={question.id}>
                <p>{question.statement}</p>
                <p><strong>Input Format:</strong> </p>
                <p>{question.inputFormat}</p>
                <p><strong>Output Format:</strong></p>
                <p> {question.outputFormat}</p>
                <p><strong>Sample Input:</strong></p>
                <pre style={{ background: "#8d038d", paddingBottom: "30px" }}>{question.sampleInput}</pre>            
                <p><strong>Sample Output:</strong></p>            
                <pre style={{ background: "#8d038d", paddingBottom: "30px" }}>{question.sampleOutput}</pre>
                <hr />
            </div>
     </>

  );
};





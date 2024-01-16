export default function DisplayChallenge({ question }) {
    // takes in a question object and displays it
    return (
        <>
            <div key={question.id}>
                <p>{question.statement}</p>
                <p><strong>Input Format:</strong> </p>
                <p>{question.Input_Format}</p>
                <p><strong>Output Format:</strong></p>
                <p> {question.Output_Format}</p>
                <p><strong>Sample Input:</strong></p>
                <pre style={{ background: "#8d038d", paddingBottom: "30px" }}>{question.Sample_Input}</pre>            
                <p><strong>Sample Output:</strong></p>            
                <pre style={{ background: "#8d038d", paddingBottom: "30px" }}>{question.Sample_Output}</pre>
                <hr />
            </div>
     </>

  );
};





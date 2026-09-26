function EstimateSummary({totalTasks,totalHours,totalCost}) {
    return (
        <div className="summary">
            <div className="summary-item">
                <p>Total Tasks</p>
                <h1>{totalTasks}</h1>
            </div>
            <div className="summary-item">
                <p>Total Hours</p>
                <h1>{totalHours}</h1>
            </div>
            <div className="summary-item">
                <p>Total Cost</p>
                <h1>₹{totalCost.toLocaleString("en-IN")}</h1>
            </div>
        </div>
    )
}
export default EstimateSummary;
export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 ' +
                className
            }
        />
    );
}
export default function Checkbox({ label, ...props }) {
    return (
        <div>
            <div className="flex flex-row items-center gap-2">
                <input
                    {...props}
                    type="checkbox"
                    className={
                        "rounded-md bg-white border-gray-200 checked:bg-teal-500"
                    }
                />
                <label className="text-sm text-gray-700">{label}</label>
            </div>
        </div>
    );
}
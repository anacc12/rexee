export interface LoaderProps {
}

export function Loader(props: LoaderProps) {

    return (
        <div className="flex justify-center items-center h-full">
            <div className="loader bg-white outline-gray-light p-5 rounded-full flex space-x-3">
                <div
                    className="w-3 h-3 bg-primary rounded-full animate-bounce"
                    style={{ animationDuration: "0.5s", animationDelay: "0.1s" }}
                ></div>
                <div
                    className="w-3 h-3 bg-primary rounded-full animate-bounce"
                    style={{ animationDuration: "0.5s", animationDelay: "0.3s" }}
                ></div>
                <div
                    className="w-3 h-3 bg-primary rounded-full animate-bounce"
                    style={{ animationDuration: "0.5s", animationDelay: "0.6s" }}
                ></div>
            </div>
        </div>
    )
}


export default Loader;
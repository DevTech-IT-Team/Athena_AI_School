import React from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log errors in production
    if (process.env.NODE_ENV === "production") {
      console.error("Error caught by boundary:", error, errorInfo);
    }
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center
        px-4 py-10 bg-[#FFFDF7] relative overflow-hidden">

          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-72 h-72
          bg-[#F4C542]/15 rounded-full blur-3xl" />

          <div className="absolute bottom-0 left-0 w-72 h-72
          bg-[#2563EB]/10 rounded-full blur-3xl" />

          {/* Error Card */}
          <div className="relative z-10 w-full max-w-xl
          bg-white rounded-3xl
          border border-[#E8EAF2]
          shadow-[0_15px_50px_rgba(20,32,75,0.08)]
          overflow-hidden">

            {/* Header */}
            <div className="bg-[#14204B] px-6 py-8 sm:px-10
            text-center relative overflow-hidden">

              {/* Decorative Circles */}
              <div className="absolute -top-10 -right-10
              w-32 h-32 bg-white/10 rounded-full blur-2xl" />

              <div className="absolute -bottom-10 -left-10
              w-32 h-32 bg-[#F4C542]/20 rounded-full blur-2xl" />

              <div className="relative z-10">

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4
                rounded-2xl bg-[#F4C542]
                flex items-center justify-center
                shadow-lg">

                  <AlertTriangle
                    size={30}
                    className="text-[#14204B]"
                  />
                </div>

                <p className="text-[#F4C542] text-xs
                font-semibold uppercase tracking-widest mb-2">
                  Edulectual K12
                </p>

                <h1 className="text-2xl sm:text-3xl
                font-bold text-white">
                  Something went wrong
                </h1>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 py-8 sm:px-10 text-center">

              <p className="text-[#14204B]/70 text-sm sm:text-base
              leading-relaxed mb-8 max-w-md mx-auto">
                We're sorry, but something unexpected happened.
                Don't worry, you can try refreshing the page
                to continue your learning experience.
              </p>

              {/* Refresh Button */}
              <button
                onClick={this.handleRefresh}
                className="inline-flex items-center justify-center gap-2
                px-7 py-3.5
                bg-[#F4C542] text-[#14204B]
                font-bold text-sm
                rounded-full
                shadow-[0_4px_15px_rgba(244,197,66,0.25)]
                hover:bg-[#EFBF32]
                hover:-translate-y-0.5
                hover:shadow-[0_6px_20px_rgba(244,197,66,0.35)]
                transition-all duration-300
                cursor-pointer"
              >
                <RefreshCw size={18} />
                Refresh Page
              </button>

              {/* Development Error Details */}
              {process.env.NODE_ENV === "development" && (
                <details className="mt-8 text-left
                bg-[#F4F8FF]
                border border-[#E5EAF5]
                rounded-2xl overflow-hidden">

                  <summary className="cursor-pointer
                  px-4 py-3
                  text-sm font-semibold text-[#14204B]
                  hover:bg-[#EAF2FF]
                  transition-colors">
                    View Error Details
                  </summary>

                  <div className="p-4 border-t border-[#E5EAF5]">

                    <pre className="text-xs text-[#14204B]/80
                    whitespace-pre-wrap break-words
                    bg-white p-4 rounded-xl
                    overflow-auto max-h-64">
                      {this.state.error &&
                        this.state.error.toString()}

                      {"\n\n"}

                      {this.state.errorInfo?.componentStack}
                    </pre>
                  </div>
                </details>
              )}

            </div>

            {/* Footer */}
            <div className="px-6 py-4
            bg-[#F4F8FF]
            border-t border-[#E5EAF5]">

              <p className="text-xs text-[#14204B]/60 text-center">
                Edulectual K12 · Online School
              </p>
            </div>

          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
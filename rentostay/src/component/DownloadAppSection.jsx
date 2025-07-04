import React from "react";

const DownloadAppSection = () => {
  return (
    <div className="bg-[#d7f4e8] w-full py-14 px-4 md:px-20 rounded-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#2d2d2d] leading-tight">
            Real Estate in your pocket
          </h2>
          <p className="text-[17px] text-[#444] mt-4 leading-relaxed">
            With our app, spend less time searching and more time at your
            dream home.{" "}
            <span className="font-semibold text-[#2d2d2d]">Download now!</span>
          </p>

          {/* Input + Send Link */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <input
              type="tel"
              placeholder="Enter Mobile number"
              className="w-full sm:w-72 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
              Send Link
            </button>
          </div>

          {/* Store Badges + QR Code */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-6 mt-8">
            {/* Store Badges */}
            <div className="flex gap-4">
              <img
                src="/public/images/google-play.png"
                alt="Google Play"
                className="h-12"
              />
              <img
                src="/public/images/app-store.png"
                alt="App Store"
                className="h-12"
              />
            </div>

            {/* QR Code */}
            <div className="mt-2">
              <img
                src="/images/qrCode.png"
                alt="QR Code"
                className="w-52 h-28 ml-16"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Mobile Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/desktop-app-screen-v-two.png"
            alt="Phone UI Preview"
            className="max-h-[500px] object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;

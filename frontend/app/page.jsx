"use client";

import PrimaryButton from "@components/PrimaryButton";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';

const HomePage = () => {
  return (
    <div className="imageContainer">
      <ToastContainer />
      <Image
        src="/images/carpooling.svg"
        alt="Carpooling home page image"
        width={200}
        height={200}
        className="image"
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          marginLeft: "30px",
        }}
      >
        <h1>Welcome to EtherWheels - A Ride Sharing Platform</h1>
        <p>
          Want to do something nice for the environment and also save some
          money? <br />
          You can now get started directly!
        </p>
        <PrimaryButton>
          <Link href="/register">Proceed to Registration</Link>
        </PrimaryButton>
      </div>
    </div>
  );
};

export default HomePage;

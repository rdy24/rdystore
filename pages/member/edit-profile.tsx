import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import Head from "next/head";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { JWTPayloadTypes, UserTypes } from "../../services/data-type/index";
import { updateProfile } from "../../services/member";
import SideBar from "../../components/organism/SideBar/index";

interface UserStateTypes {
  id: string;
  name: string;
  email: string;
  avatar: any;
}
export default function EditProfile() {
  const [user, setUser] = useState<UserStateTypes>({
    id: "",
    name: "",
    email: "",
    avatar: "",
  });
  const [imagePreview, setImagePreview] = useState("/");
  const router = useRouter();
  const IMG = process.env.NEXT_PUBLIC_IMG;

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      setUser(userFromPayload);
    }
  }, []);
  const onSubmit = async () => {
    const data = new FormData();

    data.append("image", user.avatar);
    data.append("name", user.name);
    const response = await updateProfile(data);
    if (response.error) {
      toast.error(response.message);
    } else {
      Cookies.remove("token");
      router.push("/sign-in");
    }
  };
  return (
    <>
      <Head>
        <title>Youpay | Edit Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="edit-profile overflow-auto">
        <SideBar activeMenu="settings" />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                <div className="photo d-flex">
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      {imagePreview === "/" ? (
                        <img
                          src={`${IMG}/${user.avatar}`}
                          alt="icon upload"
                          width={90}
                          height={90}
                          style={{ borderRadius: "100%" }}
                        />
                      ) : (
                        <img
                          src={imagePreview}
                          alt="icon upload"
                          width={90}
                          height={90}
                          style={{ borderRadius: "100%" }}
                        />
                      )}
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={(event) => {
                        const img = event.target.files![0];
                        setImagePreview(URL.createObjectURL(img));
                        return setUser({
                          ...user,
                          avatar: img,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="pt-30">
                  <label
                    htmlFor="name"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-pill text-lg"
                    id="name"
                    name="name"
                    aria-describedby="name"
                    placeholder="Enter your name"
                    value={user.name}
                    onChange={(event) =>
                      setUser({
                        ...user,
                        name: event.target.value,
                      })
                    }
                  />
                </div>
                <div className="pt-30">
                  <label
                    htmlFor="email"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-pill text-lg"
                    id="email"
                    name="email"
                    aria-describedby="email"
                    placeholder="Enter your email address"
                    disabled
                    value={user.email}
                  />
                </div>
                <div className="button-group d-flex flex-column pt-50">
                  <button
                    type="button"
                    className="btn btn-save fw-medium text-lg text-white rounded-pill"
                    onClick={onSubmit}
                  >
                    Save My Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

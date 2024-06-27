"use client";

import React from "react";

import {
  Button,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";

import Spinner from "@/components/Loaders/Spinner";
import z from "zod";

type AuthModalProps = {
  mode: string;
};

export interface RegisterValues {
  loginEmail: string;
  loginPassword: string;
  name: string;
  email: string;
  password: string;
  repPassword: string;
}

export interface RegisterErrors {
  loginEmail: string;
  loginPassword: string;
  name: string;
  email: string;
  password: string;
  repPassword: string;
}

const b_rounds = 10;

const schema = z
  .object({
    loginEmail: z.string().min(1).email("Must be and email"),
    loginPassword: z.string().min(1),
    name: z.string().min(1),
    email: z.string().min(1).email().email("Must be and email"),
    password: z.string().min(1),
    repPassword: z.string().min(1),
  })
  .refine((data) => data.password === data.repPassword, {
    message: "match-pass-error",
    path: ["repPassword"], // set the path of the error
  });

export default function AuthModal({ mode = "login" }: AuthModalProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selected, setSelected] = React.useState<string>(mode);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const [values, setValues] = React.useState<RegisterValues>({
    loginEmail: "",
    loginPassword: "",
    name: "",
    email: "",
    password: "",
    repPassword: "",
  });

  const [errors, setErrors] = React.useState<RegisterErrors>({
    loginEmail: "",
    loginPassword: "",
    name: "",
    email: "",
    password: "",
    repPassword: "",
  });

  const handleRegisterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    optionalName?: string,
  ) => {
    if (optionalName) {
      setValues({ ...values, [optionalName]: e.target.value });
    } else setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    setIsLoading(true);

    const result = schema.safeParse(values);
    if (!result.success) {
      if (result.error.formErrors.fieldErrors.repPassword) {
        setErrorMessage("result.error.formErrors.fieldErrors.repPassword[0]");
      }

      setErrors(result.error.formErrors.fieldErrors);
      setIsLoading(false);
      return;
    }

    // const b_salt = await bcrypt.genSalb_rounds);
    // const hashedPassword = await bcrypt.hash(values.password, b_salt);

    setIsLoading(false);
  };

  const handleLogin = async (email = "", password = "") => {
    setIsLoading(true);

    setIsLoading(false);
  };

  return (
    <>
      {mode === "login" && (
        <Button
          fullWidth={true}
          onPress={onOpen}
          color="primary"
          variant="flat"
          aria-label={"login"}
        >
          {"login"}
        </Button>
      )}

      {mode === "register" && (
        <Button
          fullWidth={true}
          onPress={onOpen}
          color="primary"
          variant="flat"
          aria-label={"signup"}
        >
          {"signup"}
        </Button>
      )}

      {mode === "mobile-login" && (
        <Button
          onPress={onOpen}
          className="rounded-md p-0 text-xl"
          style={{
            width: "max-content",
            height: "max-content",
            justifyContent: "left",
          }}
          color="primary"
          variant="light"
          aria-label={"login"}
        >
          {"login"}
        </Button>
      )}

      {mode === "mobile-register" && (
        <Button
          onPress={onOpen}
          className="rounded-md p-0 text-xl"
          style={{
            width: "max-content",
            height: "max-content",
            justifyContent: "left",
          }}
          color="primary"
          variant="light"
          aria-label={"signup"}
        >
          {"signup"}
        </Button>
      )}

      <Modal
        classNames={{ backdrop: "z-[100000]", wrapper: "z-[1000000]" }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {"auth"}
              </ModalHeader>
              <ModalBody>
                <div className="overflow-hidden p-2">
                  <Tabs
                    fullWidth
                    size="md"
                    aria-label={"tabs-aria"}
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                  >
                    <Tab key="login" title={"login"}>
                      <form className="flex flex-col gap-4">
                        <Input
                          name="loginEmail"
                          value={values.loginEmail}
                          color={errors.loginEmail ? "danger" : "default"}
                          errorMessage={
                            errors.loginEmail && "Please enter a valid email"
                          }
                          onChange={handleRegisterChange}
                          isRequired
                          label={"email"}
                          placeholder={"enter-email"}
                          type="email"
                        />
                        <Input
                          name="loginPassword"
                          value={values.loginPassword}
                          color={errors.loginPassword ? "danger" : "default"}
                          errorMessage={
                            errors.loginPassword &&
                            "Please enter a valid password"
                          }
                          onChange={handleRegisterChange}
                          isRequired
                          label={"password"}
                          placeholder={"enter-password"}
                          type="password"
                        />

                        <p className="text-center text-small">
                          {"no-account"}{" "}
                          <Link
                            size="sm"
                            className="cursor-pointer"
                            onPress={() => setSelected("sign-up")}
                          >
                            {"signup"}
                          </Link>
                        </p>

                        <div className="flex justify-end gap-2">
                          <Button
                            onPress={() => handleLogin()}
                            fullWidth
                            color="primary"
                          >
                            {isLoading ? (
                              <div>
                                <Spinner />
                              </div>
                            ) : (
                              "login"
                            )}
                          </Button>
                        </div>
                      </form>

                      {errorMessage && (
                        <div className="bg-error mt-4 rounded-lg p-2 text-white ">
                          <span>{errorMessage}</span>
                        </div>
                      )}
                    </Tab>

                    <Tab disabled={true} key="sign-up" title={"signup"}>
                      <form className="flex flex-col gap-4 ">
                        <Input
                          name="name"
                          label={"name"}
                          value={values.name}
                          color={errors.name ? "danger" : "default"}
                          errorMessage={
                            errors.name && "Please enter a valid name"
                          }
                          onChange={handleRegisterChange}
                          isRequired
                          placeholder={"enter-name"}
                        />

                        <Input
                          name="email"
                          value={values.email}
                          color={errors.email ? "danger" : "default"}
                          errorMessage={
                            errors.email && "Please enter a valid email"
                          }
                          onChange={handleRegisterChange}
                          isRequired
                          label={"email"}
                          placeholder={"enter-email"}
                          type="email"
                        />
                        <Input
                          name="password"
                          value={values.password}
                          color={errors.password ? "danger" : "default"}
                          errorMessage={
                            errors.password && "Please enter a valid password"
                          }
                          onChange={handleRegisterChange}
                          isRequired
                          label={"password"}
                          placeholder={"enter-password"}
                          type="password"
                        />

                        <Input
                          name="repPassword"
                          value={values.repPassword}
                          color={errors.repPassword ? "danger" : "default"}
                          errorMessage={
                            errors.repPassword &&
                            "Please enter a valid password"
                          }
                          onChange={handleRegisterChange}
                          isRequired
                          label={"rep-password"}
                          type="password"
                        />

                        <p className="text-center text-small">
                          {"with-account"}{" "}
                          <Link
                            size="sm"
                            className="cursor-pointer"
                            onPress={() => setSelected("login")}
                          >
                            {"login"}
                          </Link>
                        </p>

                        <div className="flex justify-end gap-2">
                          <Button
                            onPress={handleRegister}
                            fullWidth
                            color="primary"
                          >
                            {isLoading ? (
                              <div>
                                <Spinner />
                              </div>
                            ) : (
                              "signup"
                            )}
                          </Button>
                        </div>

                        {errorMessage && (
                          <div className="bg-error mt-4 rounded-lg p-2 text-white ">
                            <span>{errorMessage}</span>
                          </div>
                        )}
                      </form>
                    </Tab>
                  </Tabs>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

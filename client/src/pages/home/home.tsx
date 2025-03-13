import { useMutation } from "@tanstack/react-query";

import { LogoutButton, HomeSkeleton } from "./components";
import { css } from "~/styled-system/css";
import { Button } from "~/components";
import InactiveAccountAlert from "./components/inactive-account-alert";
import { useToggle } from "~/hooks";
import usersService from "~/services/users";
import CardInfo from "./components/card-info";
import { queryClient } from "~/libs/react-query";
import { useAuth } from "~/providers/auth-provider";

interface IFields {
  balance?: string;
  phone?: string;
  address?: string;
  company?: string;
}

function HomePage() {
  const { user } = useAuth();
  const [showBalance, toggleBalance] = useToggle(false);
  const [editMode, toggleEditMode] = useToggle(false);

  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: ({ id, fields }: { id: string; fields: IFields }) =>
      usersService.update(id, fields),
  });

  const updateUserHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const fields = Object.fromEntries(formData.entries());

    updateUser(
      { id: user?._id, fields },
      {
        onSuccess: async () => {
          toggleEditMode();
          await queryClient.refetchQueries({ queryKey: ["user", "me"] });
        },
      }
    );
  };

  if (!user) return <HomeSkeleton />;

  return (
    <div>
      {!user?.isActive && <InactiveAccountAlert />}

      <form
        className={css({
          opacity: user?.isActive ? 1 : 0.8,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        })}
        onSubmit={updateUserHandler}
      >
        <header className={css({ bg: "gray.100", p: 4 })}>
          <div className={css({ display: "flex", justifyContent: "flex-end" })}>
            <LogoutButton />
          </div>

          <figure
            className={css({
              display: "flex",
              justifyContent: "center",
              p: 4,
              flexDirection: "column",
              alignItems: "center",
            })}
          >
            <img
              className={css({
                borderRadius: "full",
                objectFit: "cover",
                maxWidth: "100%",
                w: "100px",
                h: "100px",
                boxShadow: "md",
              })}
              width={100}
              height={100}
              src={user?.picture}
              alt={user?.name.first}
            />

            <figcaption className={css({ mt: 4, textAlign: "center" })}>
              <h1 className={css({ fontSize: "xl", fontWeight: "bold" })}>
                {user?.name.first} {user?.name.last}
              </h1>

              <p className={css({ color: "gray.500" })}>{user?.email}</p>
            </figcaption>
          </figure>

          <div className={css({ display: "flex", gap: 4, my: 4 })}>
            <Button
              variant={showBalance ? "warning" : "success"}
              onClick={toggleBalance}
            >
              {showBalance ? "Hide" : "Show"} balance
            </Button>
            <Button
              variant={editMode ? "danger" : "secondary"}
              onClick={toggleEditMode}
            >
              {editMode ? "Cancel edit" : "Edit"}
            </Button>
          </div>
        </header>

        <div className={css({ p: 4 })}>
          <ul
            className={css({
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
              flexDirection: "column",
            })}
          >
            <li className={css({ flex: 1 })}>
              <CardInfo
                defaultValue={user?.balance || ""}
                editable={false}
                editMode={editMode}
                label="Balance"
                name="balance"
                displayValue={showBalance ? user?.balance || "" : "********"}
              />
            </li>

            <li className={css({ flex: 1 })}>
              <CardInfo
                defaultValue={user?.phone || ""}
                editable
                editMode={editMode}
                label="Phone"
                name="phone"
                displayValue={user?.phone || ""}
              />
            </li>

            <li className={css({ flex: 1 })}>
              <CardInfo
                defaultValue={user?.address || ""}
                editable
                editMode={editMode}
                label="Address"
                name="address"
                displayValue={user?.address || ""}
              />
            </li>

            <li className={css({ flex: 1 })}>
              <CardInfo
                defaultValue={user?.company || ""}
                editable
                editMode={editMode}
                label="Company"
                name="company"
                displayValue={user?.company || ""}
              />
            </li>

            <li className={css({ flex: 1 })}>
              <CardInfo
                editable={false}
                editMode={editMode}
                label="Age"
                displayValue={user?.age || ""}
                defaultValue={user?.age || ""}
                name="age"
              />
            </li>
          </ul>

          {editMode && (
            <div className={css({ mt: 4 })}>
              <Button type="submit" variant="primary" disabled={isPending}>
                Update
              </Button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default HomePage;

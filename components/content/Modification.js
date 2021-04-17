export const Modification = () => {
  return (
    <>
      <p>
        As explained in the <span className="highlight">Theory</span> section,
        the Vigenere Cipher uses 26 characters of the alphabet. However, in the
        following implementation digits are included as well, thereby briging
        the domain to 36 characters.
      </p>
      <br />
      <p>
        Earlier, the restricted domain, without a known key, enforced the
        complexity of 26! (factorial). This is because, each character could be
        encrypted/decrypted with any other. Now, with added digits, the
        complexity increases to 36! (factorial) which is way more complex and
        harder to crack. Vigenere Cipher introduced only one case that decrypts
        the cipher.
      </p>
      <br />
      <p>
        <strong>Encryption </strong>E<sub>i</sub> = (P<sub>i</sub> + K
        <sub>i</sub>) mod 36 <br /> <br /> <strong>Decryption</strong> D
        <sub>i</sub> = (E<sub>i</sub> - K<sub>i</sub> + 36) mod 36
      </p>
    </>
  );
};

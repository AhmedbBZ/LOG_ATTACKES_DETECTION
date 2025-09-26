# 🛡️ LOG_ATTACKES_DETECTION

## 📌 Aperçu
Ce projet permet de **détecter et analyser automatiquement des attaques** dans les journaux d’un serveur Apache grâce à des modèles de **Machine Learning**.  
Il combine scripts Python, notebooks Jupyter et une interface web (Node.js/React) pour tester le système.  

Les attaques détectées incluent une large variété de scénarios allant des **attaques par force brute** aux **exploits Zero-Day**.  

---

## ✨ Fonctionnalités
- Prétraitement des logs Apache  
- Extraction de features avec **TF-IDF**  
- Équilibrage du dataset via **SMOTE-ENN**  
- Entraînement et évaluation de modèles ML (classification multi-classes)  
- Sauvegarde et réutilisation des modèles (`model_finale.pkl`, `vectorizer.pkl`)  
- Interface web pour tester en temps réel  

---

## 📂 Structure du projet
- `application.py` → Script principal Python (pipeline de détection)  
- `app.ipynb`, `ML.ipynb`, `Projet.ipynb` → Notebooks d’analyse et d’entraînement  
- `log_dataset_Attackes_detection.csv`, `log_dataset.csv` → Datasets de logs Apache  
- `model_finale.pkl`, `vectorizer.pkl` → Modèle ML et vectorizer sauvegardés  
- `main.js` → Fichier JavaScript (interface web)  
- `static/`, `templates/` → Fichiers statiques et templates du serveur web  
- `package.json` → Dépendances Node.js  

---

## 🛑 Attaques détectées
Le système est capable de classer les logs parmi les catégories suivantes :  

| Classe | Nombre d’exemples |
|--------|-------------------|
| ✅ Benign | 6841 |
| 🔑 Brute Force Attack | 458 |
| 💻 Malware and Ransomware | 335 |
| ⬆️ Privilege Escalation | 282 |
| 🌐 Distributed Denial of Service (DDoS) | 263 |
| 🔗 Man-in-the-Middle (MITM) | 256 |
| ✍️ Cross-Site Scripting (XSS) | 224 |
| 🗄️ SQL Injection | 216 |
| 🎭 Cross-Site Request Forgery (CSRF) | 188 |
| 📤 Data Exfiltration | 186 |
| 🎣 Phishing & Credential Harvesting | 178 |
| 🕵️ Insider Threats | 138 |
| ⚡ Remote Code Execution (RCE) | 127 |
| 📂 Directory Traversal | 125 |
| 🛠️ Zero-Day Exploit | 109 |
| 📎 Phishing via Malicious Links | 74 |

---

## ⚙️ Installation et exécution

### 🔹 Cloner le dépôt
```bash
git clone https://github.com/AhmedbBZ/LOG_ATTACKES_DETECTION.git
cd LOG_ATTACKES_DETECTION
```

### 🔹 Installer les dépendances Python
```bash
pip install -r requirements.txt
```

### 🔹 Lancer l’application Python
```bash
python application.py
```

### 🔹 (Optionnel) Installer et lancer l’interface web
```bash
npm install
npm start
```

---

## 🖥️ Utilisation
1. Ouvrir l’application (console ou navigateur `http://localhost:3000`).  
2. Fournir un log issu du dataset :  
   **`log_dataset_Attackes_detection.csv`**  
3. Cliquer sur **Upload and Analyze**.  
4. ✅ Le système affiche la **catégorie détectée** (attaque ou log bénin).  

---

## 🛠️ Technologies
- **Python** : scikit-learn, TF-IDF, SMOTE-ENN  
- **Node.js / Express** : Backend web  
- **React.js** : Frontend (optionnel)  
- **CSV dataset** : Logs Apache (attaques + normaux)  

---

## 🎯 Résultats attendus
- Classification automatique des logs avec une précision d’environ **95%**  
- Détection rapide et fiable des attaques dans les journaux Apache  

---

## 📜 Licence
Projet sous licence **MIT**.  

---

## 👤 Auteur
**AhmedbBouzid**

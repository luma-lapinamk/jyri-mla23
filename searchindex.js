Search.setIndex({"docnames": ["notebooks/appendix/learning_environment", "notebooks/appendix/neural_networks", "notebooks/appendix/practical_methodology", "notebooks/appendix/probability_statistics_and_optimization", "notebooks/examination/mock_examination", "notebooks/introduction/book_intro", "notebooks/introduction/exercises", "notebooks/introduction/topic_intro", "notebooks/semi-supervised_learning/classification_with_pseudo_label", "notebooks/semi-supervised_learning/exercises", "notebooks/semi-supervised_learning/introduction", "notebooks/supervised_learning/classification_and_regression_examples_with_k-nearest_neighbors", "notebooks/supervised_learning/classification_and_regression_with_k-nearest_neighbors", "notebooks/supervised_learning/classification_and_regression_with_neural_networks", "notebooks/supervised_learning/exercises", "notebooks/supervised_learning/introduction", "notebooks/unsupervised_learning/clustering_with_k-means", "notebooks/unsupervised_learning/dimensionality_reduction_with_pca", "notebooks/unsupervised_learning/exercises", "notebooks/unsupervised_learning/introduction"], "filenames": ["notebooks/appendix/learning_environment.md", "notebooks/appendix/neural_networks.md", "notebooks/appendix/practical_methodology.md", "notebooks/appendix/probability_statistics_and_optimization.md", "notebooks/examination/mock_examination.md", "notebooks/introduction/book_intro.md", "notebooks/introduction/exercises.md", "notebooks/introduction/topic_intro.md", "notebooks/semi-supervised_learning/classification_with_pseudo_label.md", "notebooks/semi-supervised_learning/exercises.md", "notebooks/semi-supervised_learning/introduction.md", "notebooks/supervised_learning/classification_and_regression_examples_with_k-nearest_neighbors.ipynb", "notebooks/supervised_learning/classification_and_regression_with_k-nearest_neighbors.md", "notebooks/supervised_learning/classification_and_regression_with_neural_networks.md", "notebooks/supervised_learning/exercises.md", "notebooks/supervised_learning/introduction.md", "notebooks/unsupervised_learning/clustering_with_k-means.md", "notebooks/unsupervised_learning/dimensionality_reduction_with_pca.md", "notebooks/unsupervised_learning/exercises.md", "notebooks/unsupervised_learning/introduction.md"], "titles": ["Learning environment", "Neural networks", "Practical methodology", "Probability, statistics, and optimization", "Mock examination", "Machine learning algorithms", "Exercises", "Overview", "Classification with Pseudo-Label", "Exercises", "Introduction", "Example kNN regression and classification", "Classification and regression with k-nearest neighbors", "Classification and regression with neural networks", "Exercises", "Introduction", "Clustering with k-means", "Dimensionality reduction with principal components analysis", "Exercises", "Introduction"], "terms": {"welcom": 5, "The": [5, 11, 12], "materi": 5, "here": [5, 12], "ar": 5, "cours": 5, "unit": 5, "content": 5, "being": 5, "produc": 5, "subject": 5, "chang": 5, "author": 11, "jyri": 11, "kivinen": 11, "lapinamk": 11, "fi": 11, "version": 11, "8": 11, "septemb": 11, "2023": 11, "credit": 11, "notebook": 11, "us": [11, 12], "some": 11, "featur": [11, 12], "draw": 11, "inspir": 11, "from": [11, 12], "present": 11, "http": 11, "scikit": 11, "learn": 11, "org": 11, "stabl": 11, "auto_exampl": 11, "plot_regress": 11, "html": 11, "page": 11, "gener": 11, "have": 11, "state": 11, "licenc": 11, "alexandr": 11, "gramfort": 11, "inria": 11, "fr": 11, "fabian": 11, "pedregosa": 11, "licens": 11, "bsd": 11, "3": 11, "claus": 11, "c": 11, "numpi": [11, 12], "np": [11, 12], "matplotlib": [11, 12], "pyplot": [11, 12], "plt": [11, 12], "sklearn": 11, "model_select": 11, "kfold": 11, "stratifiedkfold": 11, "sy": [11, 12], "try": 11, "googl": 11, "colab": 11, "colab_environ": 11, "true": 11, "except": 11, "fals": 11, "git": 11, "clone": 11, "github": 11, "com": 11, "luma": 11, "mla23": 11, "path": [11, 12], "insert": [11, 12], "0": [11, 12], "els": 11, "nearest_neighbor": [11, 12], "pygment": 11, "py": 11, "34mimport": 11, "39": 11, "49": 11, "00m": 11, "04m": 11, "36mnumpi": 11, "34ma": 11, "36mnp": 11, "37m": 11, "34mfrom": 11, "36msklearn": 11, "36m": 11, "36mmetric": 11, "classification_report": 11, "r2_score": 11, "34mclass": 11, "32mnearestneighborclassifi": 11, "33m": 11, "nn": [11, 12], "classifi": 11, "34mdef": 11, "32m__init__": 11, "36mself": 11, "name": 11, "33mnearest_neighbor_classifi": 11, "90m": 11, "staticmethod": 11, "32mcalculate_pairwise_datapoint_dist": 11, "x_a": 11, "x_b": 11, "34mreturn": 11, "sqrt": 11, "sum": 11, "reshap": 11, "34m1": 11, "shape": 11, "34m2": 11, "axi": 11, "32mcalculate_neighbor_indic": 11, "pairwise_dist": 11, "n_neighbor": 11, "argsort": 11, "34m0": 11, "32mcalculate_predicted_class": 11, "neighbor_indic": 11, "y": 11, "class_count": 11, "uniqu": 11, "return_count": 11, "34mtrue": 11, "argmax": 11, "32mpredict": 11, "x": 11, "x_new": 11, "n_new": 11, "predicted_class": 11, "empti": 11, "dtype": 11, "36mint": 11, "34mfor": 11, "ii": 11, "35min": 11, "arang": 11, "calculate_pairwise_datapoint_dist": 11, "calculate_neighbor_indic": 11, "calculate_predicted_class": 11, "32mscore": 11, "y_new": 11, "y_new_predict": 11, "predict": 11, "output_dict": 11, "32mnearestneighborregressor": 11, "regressor": 11, "33mnearest_neighbor_regressor": 11, "32mcalculate_predicted_valu": 11, "distance_weight": 11, "34mif": 11, "neighbor_weight": 11, "finfo": 11, "36mfloat": 11, "ep": 11, "34mels": 11, "mean": 11, "equal": 11, "weight": 11, "predicted_valu": 11, "calculate_predicted_valu": 11, "helper": 11, "function": 11, "clean": 11, "noisi": 11, "observ": 11, "def": 11, "create_noiseless_process_output": 11, "process_nam": 11, "cosin": 11, "return": 11, "co": 11, "elif": 11, "logistic_sigmoid": 11, "1": 11, "exp": 11, "add_nois": 11, "noise_level": 11, "uniform": 11, "5": 11, "random": 11, "rand": 11, "size": 11, "gaussian": 11, "randn": 11, "create_process_output": 11, "noiseless_process_nam": 11, "noise_process_nam": 11, "y_noiseless": 11, "y_noisi": 11, "spefic": 11, "n_trainval_datapoint": 11, "100": 11, "n_test_datapoint": 11, "500": 11, "x_min": 11, "2": [11, 12], "pi": 11, "x_max": 11, "clean_data_process": 11, "noise_process": 11, "random_number_generator_se": 11, "42": 11, "set": 11, "number": 11, "seed": 11, "random_indic": 11, "permut": 11, "x_trainval": 11, "sort": 11, "copi": [11, 12], "x_test": 11, "y_trainval_noiseless": 11, "y_trainval": 11, "ravel": 11, "y_test_noiseless": 11, "y_test": 11, "plot": 11, "fig": 11, "ax": 11, "subplot": 11, "nrow": 11, "ncol": 11, "figsiz": 11, "linspac": 11, "1000": 11, "label": 11, "noiseless": 11, "process": 11, "alpha": 11, "markers": 11, "ro": 11, "trainval": 11, "datapoint": 11, "legend": 11, "instanti": 11, "model": 11, "nearestneighborregressor": 11, "leav": 11, "one": 11, "out": 11, "cross": 11, "valid": 11, "choos": 11, "n_neighbors_opt": 11, "50": 11, "score": 11, "enumer": 11, "jj": 11, "train_indic": 11, "val_indic": 11, "val_predict": 11, "y_test_predict": 11, "ax1": 11, "ax2": 11, "16": 11, "o": 11, "set_xlabel": 11, "fontsiz": 11, "set_ylabel": 11, "set_titl": 11, "f": 11, "best": 11, "max": 11, "b": 11, "mynearestneighborregressor": 11, "__init__": 11, "self": 11, "my_nearest_neighbor_regressor": 11, "super": 11, "none": 11, "my_scor": 11, "my_fit": 11, "n_folds_in_cv": 11, "memor": 11, "train": 11, "store": 11, "stratifi": 11, "kf": 11, "n_split": 11, "get_n_split": 11, "split": 11, "stat": 11, "my_predict": 11, "instanc": 11, "my_knn": 11, "assess": 11, "perform": 11, "result": 11, "linewidth": 11, "mynearestneighborclassifi": 11, "nearestneighborclassifi": 11, "my_nearest_neighbor_classifi": 11, "fit_criteria": 11, "accuraci": 11, "skf": 11, "util": 11, "abov": 11, "so": 11, "serv": 11, "create_label": 11, "xy": 11, "clean_data_process_nam": 11, "logical_and": 11, "astyp": 11, "int": 11, "concaten": 11, "newaxi": 11, "class_color": 11, "arrai": 11, "scatter": 11, "s": 11, "10": 11, "titl": 11, "ax3": 11, "ax4": 11, "4": 11, "32": 11, "test": 11, "color": 11, "import": 12, "code": 12, "enter": 12, "toi": 12, "exampl": 12, "below": 12, "cell": 12, "run": 12, "edit": 12, "num_nearest": 12, "what": 12, "why": 12, "provid": 12, "algorithm": 12, "scenario": 12, "should": 12, "highlight": 12, "properti": 12, "effect": 12, "amount": 12, "data": 12, "point": 12}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"learn": [0, 5], "environ": 0, "neural": [1, 13], "network": [1, 13], "practic": 2, "methodolog": 2, "probabl": 3, "statist": 3, "optim": 3, "mock": 4, "examin": 4, "machin": 5, "algorithm": 5, "exercis": [6, 9, 14, 18], "overview": 7, "classif": [8, 11, 12, 13], "pseudo": 8, "label": 8, "introduct": [10, 15, 19], "exampl": 11, "knn": 11, "regress": [11, 12, 13], "code": 11, "import": 11, "nearest": [11, 12], "neighbor": [11, 12], "A": 11, "basic": 11, "creat": 11, "data": 11, "select": 11, "valu": 11, "k": [11, 12, 16], "new": 11, "class": 11, "extend": 11, "base": 11, "fit": 11, "experiment": 11, "experi": 11, "cluster": 16, "mean": 16, "dimension": 17, "reduct": 17, "princip": 17, "compon": 17, "analysi": 17}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})